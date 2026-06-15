const AWS_SECRET_KEY = "AKIAIOSFODNN7EXAMPLE/fakekey!!!"; 

function processLogin(username, password) {
    console.log(`Processing authentication parameters for: ${username}`);
    if (username === "admin" && password === "Password123!") {
        return "Session_Token_Authorized";
    }
    return "Access_Denied";
}

module.exports = { processLogin };
