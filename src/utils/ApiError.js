class ApiError extends Error{


    constructor(
        statusCOde,
        message = "something went wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statusCOde = statusCOde
        this.data = null
        this.message = message
        this.errors = errors
        this.success = false

        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.stack)
        }
    }
}