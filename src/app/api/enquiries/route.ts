import { NextResponse } from "next/server";
import { z } from "zod";

const MAX_REQUEST_BYTES = 16 * 1024;

const enquirySchema = z.object({
  name: z.string().trim().min(1).max(120),
  businessName: z.string().trim().max(160).optional().or(z.literal("")),
  email: z.string().trim().toLowerCase().email().max(200),
  country: z.string().trim().max(120).optional().or(z.literal("")),
  website: z.union([
    z.string().trim().url().max(200).refine((value) => /^https?:\/\//i.test(value)),
    z.literal(""),
  ]).optional(),
  service: z.enum([
    "Website Development",
    "Website Maintenance",
    "Website Redesign",
    "E-commerce Website Development",
  ]),
  budget: z.string().trim().max(60).optional().or(z.literal("")),
  timeline: z.string().trim().max(80).optional().or(z.literal("")),
  projectDescription: z.string().trim().min(10).max(2500),
  contactMethod: z.enum(["Email", "Phone", "Video call"]),
  privacy: z.boolean(),
}).strict();

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_REQUEST_BYTES) {
    return NextResponse.json({ error: "The enquiry is too large." }, { status: 413 });
  }

  if (!request.body) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let byteLength = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      byteLength += value.byteLength;
      if (byteLength > MAX_REQUEST_BYTES) {
        await reader.cancel();
        return NextResponse.json({ error: "The enquiry is too large." }, { status: 413 });
      }
      chunks.push(value);
    }
  } catch {
    return NextResponse.json({ error: "Unable to read the request body." }, { status: 400 });
  }

  const bytes = new Uint8Array(byteLength);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }

  let body: unknown;
  try {
    body = JSON.parse(new TextDecoder().decode(bytes));
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the required enquiry details and try again." },
      { status: 400 },
    );
  }

  if (!parsed.data.privacy) {
    return NextResponse.json({ error: "Privacy acknowledgement is required." }, { status: 400 });
  }

  return NextResponse.json(
    { error: "Enquiry storage is not configured. Your message was not saved." },
    { status: 503 },
  );
}
