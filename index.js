const img = document.getElementById('img')
img.addEventListener("click", changeItsShape)

const arr = [
    '50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%', //pentagon
     
    '50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%', //heptagon

    '50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%', //nanogan

    '20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%'  //bevel
]

const shapeName = [
    "pentagon", "heptagon", "nanogan", "bevel"
]

function changeItsShape() {
    const randomNum = Math.floor(Math.random() * arr.length);
    const newClipPath = arr[randomNum];
    const newShapeName = shapeName[randomNum];
    const currentClipPath = getComputedStyle(img).getPropertyValue('--shape');
    const clipPath = document.querySelector('.values');
    clipPath.innerText = `${currentClipPath} (${newShapeName})`;
    console.log(currentClipPath);

    if(currentClipPath !== newClipPath){
        img.style.setProperty("--shape", newClipPath); 
    }else{
        img.style.setProperty("--shape", arr[randomNum + 1]);
    }
    
}