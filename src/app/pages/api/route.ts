import { NextApiRequest, NextApiResponse } from "next";
import { exec } from "child_process";

export async function POST(req: Request) {
  const { folderToTrack, folderDestination } = await req.json();

  const script = `python path/to/your/script.py ${folderToTrack} ${folderDestination}`;
  return new Promise((resolve) => {
    exec(script, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        resolve(
          new Response(JSON.stringify({ message: "Error organizing folder" }), {
            status: 500,
          })
        );
        return;
      }
      if (stderr) {
        console.error(`Stderr: ${stderr}`);
        resolve(
          new Response(JSON.stringify({ message: "Error organizing folder" }), {
            status: 500,
          })
        );
        return;
      }
      console.log(`Stdout: ${stdout}`);
      resolve(
        new Response(
          JSON.stringify({ message: "Folder organization started" }),
          { status: 200 }
        )
      );
    });
  });
}
