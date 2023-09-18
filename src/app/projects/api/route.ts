import { NextRequest, NextResponse } from "next/server";
import ProjectService from "../services/ProjectsService";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { ProjectCreationRequest } from "./types";

export async function GET() {
  const projectService = new ProjectService();

  const projects = await projectService.getProjects();

  return NextResponse.json({ projects });
}

export async function POST(req: NextRequest) {

  const { name, description, status, base64data, file_type} = await req.json();

  const client = new S3Client({
    region: process.env.AWS_REGION as string,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    },
  });

  const prismaCreationRequest: ProjectCreationRequest = {
    name: name,
    description: description,
    status: status,
    logo: ""
  };

  const projectService = new ProjectService();
  const res = await projectService.postProject(prismaCreationRequest)
    .then(async (res) => {
      console.log(`Created project with id: ${res.id}`)

      const putObjectParams = {
        Bucket: process.env.BUCKET_NAME,
        Key: res.id.toString(),
        Body: base64data, //TODO: Replace with multipart uplaod
        ContentType: file_type 
      };

      return await client.send(new PutObjectCommand(putObjectParams))
        .then(async (resAWS) => {
          await projectService.putProjectImage(res.id, res.id.toString())
          console.log(`Uploaded logo to S3 with id: ${res.id}`);
        }
        )
        .catch((error) => {
          console.log("Failed to Upload Image");
        });
    })
    .catch((error) => { console.log(error); });

  return NextResponse.json({ res });
}
