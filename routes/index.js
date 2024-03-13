module.exports = app => {
    const postRoutes = require("./../routes/post.routes")
    app.use("/api/post", postRoutes)

    const responseRoutes = require("./../routes/response.routes")
    app.use("/api/response", responseRoutes)

    const authRoutes = require("./../routes/auth.routes")
    app.use("/api/auth", authRoutes)

    const userRoutes = require("./../routes/user.routes")
    app.use("/api/user", userRoutes)

    const uploadRoutes = require("./../routes/upload.routes")
    app.use("/api/upload", uploadRoutes)
}