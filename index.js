console.log("Welcome to cv screener app")
let Data = [
    {
        name: "ramu Das",
        age: 45,
        city: "kolkata",
        language: "python",
        framwork: "django",
        Image: `https://randomuser.me/api/portraits/men/91.jpg`
    },
    {
        name: "akshya kumar",
        age: 54,
        city: "mumbai",
        language: "javaScript",
        framwork: "reactjs",
        Image: `https://randomuser.me/api/portraits/men/74.jpg`
    },
    {
        name: "aishwarya rai",
        age: 45,
        city: "mumbai",
        language: "python",
        framwork: "django",
        Image: `https://randomuser.me/api/portraits/women/75.jpg`
    },
    {
        name: "sarita kumari",
        age: 21,
        city: "delhi",
        language: "c++",
        framwork: "c#",
        Image: `https://randomuser.me/api/portraits/women/76.jpg`
    },
    {
        name: "rajesh bhalla",
        age: 35,
        city: "odisha",
        language: "c#",
        framwork: "django",
        Image: `https://randomuser.me/api/portraits/men/76.jpg`
    },
    {
        name: "sonal manshing",
        age: 42,
        city: "chandigadh",
        language: "java",
        framwork: "django",
        Image: `https://randomuser.me/api/portraits/men/79.jpg`
    },
    {
        name: "raja kumar",
        age: 70,
        city: "banglore",
        language: "python",
        framwork: "django",
        Image: `https://randomuser.me/api/portraits/men/82.jpg`
    },
    {
        name: "sunny leony",
        age: 44,
        city: "mumbai",
        language: "python",
        framwork: "django",
        Image: `https://randomuser.me/api/portraits/women/96.jpg`
    },
    {
        name: "mauraya bhansali",
        age: 33,
        city: "haidrabad",
        language: "javascript",
        framwork: "django",
        Image: `https://randomuser.me/api/portraits/women/78.jpg`
    },
    {
        name: "khushi badri",
        age: 37,
        city: "assam",
        language: "python",
        framwork: "django",
        Image: `https://randomuser.me/api/portraits/women/75.jpg`
    },
    {
        name: "raushan kumar",
        age: 25,
        city: "muzaffarpur",
        language: "python",
        framwork: "django",
        Image: `https://randomuser.me/api/portraits/men/71.jpg`
    }
]


function cvIterator(profile) {
    let nextIndex = 0;
    return {
        next: function () {
            if (nextIndex < profile.length) {
                return {
                    profile: profile[nextIndex++],
                    done: false
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
}
const cvIteratorData = cvIterator(Data)
console.log(cvIteratorData.next().profile)
// const value = cvIteratorData.next()
// console.log(value)
let nexter = document.getElementById("nexter").addEventListener("click", nextcv)
function nextcv(){
    console.log("event listener is fired")
    let profile = document.getElementById("profile")
    const cvIteratorDataShow = cvIteratorData.next().profile;
    console.log(cvIteratorDataShow)
    let Image = document.getElementById("image")
    Image.innerHTML = `<img src = '${cvIteratorDataShow.Image}'>`
    console.log(`${cvIteratorDataShow.Image}`)
    profile.innerHTML = `<ul class="list-group">
 <li class="list-group-item">Name: ${cvIteratorDataShow.name}</li>
 <li class="list-group-item">${cvIteratorDataShow.age} Year Old</li>
 <li class="list-group-item">Lives in: ${cvIteratorDataShow.city}</li>
 <li class="list-group-item">Primarily works on ${cvIteratorDataShow.language}</li>
 <li class="list-group-item">With ${cvIteratorDataShow.framwork}
 framwork</li>
    </ul>`
}
nextcv()