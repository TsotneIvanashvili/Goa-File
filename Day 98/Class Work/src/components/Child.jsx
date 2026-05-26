// 2) შექმენით კომპონენტი სახელად Parent. შემდეგ შექმენით კომპონენტი Child, 
// რომელიც დააბრუნებს პარაგრაფს, სადაც ეწერება "Hello React Components". 
// Parent კომპონენტმა უნდა დააბრუნოს Child კომპონენტი, ხოლო თვითონ Parent-ი უნდა დააბრუნოს App კომპონენტმა


const Child = () => {
    return <p>Hello React Components</p>
}

export default Child