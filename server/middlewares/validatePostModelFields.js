const validatePostModelFields = (req, res, next) => {
    const { title, content } = req.body;

    const fieldErrors = [];

    if (!title) {
        fieldErrors.push({ field_name: 'title', error_name: 'required', message: 'Title is required'})
    }

    if (!content) {
        fieldErrors.push({ field_name: 'content', error_name: 'required', message: 'Content is required'})
    }

    if (fieldErrors.length === 0) {
        return next()
    }

    return res.status(400).json(fieldErrors)
}

export default validatePostModelFields;