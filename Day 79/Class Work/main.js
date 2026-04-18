// 1)გადააკეთეთ ის კოდი ისე რომ გამოიყენოთ setInterval ფუნქცია და ავტომატურად გადავიდეს რაღაც დროის მერე შემდეგ სურათზე

const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrMXC1OHFk0z0mgcBGojXHn4e2Tl3I4uaxhQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAlrrj3Q0GwNFY9g76Pyig6blK3idQ5c0ASA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_RbrckvdPqCeXq4VgzYgS7qD_kE2XuGErIw&s"

]


const img = document.getElementById("img")
let index = 0;

// const goToPrev = () => {
//     index--
//     if (index < 0) {
//         index = images.length - 1
//     }
//     img.src = images[index]
// }


const goToNext = () => {
    index++
    if (index > images.length - 1) {
        index = 0;
    }
    img.src = images[index]
}

setInterval(goToNext, 2000)