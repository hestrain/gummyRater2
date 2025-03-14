export function SignUp() {
    return(
<div>
    <h2>Sign Up</h2>
    <form>
        <div>
            <label htmlFor="userName">Username</label>
            <input type="string" name="userName"></input>
            <label htmlFor="password">Password</label>
            <input type="string" name="Password"></input>
            <label htmlFor="email">Email</label>
            <input type="string" name="Email"></input>
            <button type="submit">Sign Up</button>
        </div>
    </form>
    <p>Already have an account? <a href="">Login</a></p>
</div>
    )
}