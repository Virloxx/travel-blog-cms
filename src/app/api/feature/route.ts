export async function PUT(request: Request) {
    const req = await request.json();
    console.log("fid: " + req.id + " postID: " + req.postId );
    return Response.json({req});
}