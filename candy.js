// document.addEventListener('DOMContentLoaded', () =>{
//     const box=document.querySelector('.box')
//     const scoreDisplay=document.getElementById('score')
//     const len=8
//     const squarearr=[]
//     let score=0
//     const candy=[
//         'url(images/red-candy.png)',
//         'url(images/yellow-candy.png)',
//         'url(images/orange-candy.png)',
//         'url(images/purple-candy.png)',
//         'url(images/green-candy.png)',
//         'url(images/blue-candy.png)'
//     ]

//     // create main gameboard
//     function board(){
//         for(let i=0;i<len*len;i++){
//             const square = document.createElement('div')
//             square.setAttribute('draggable',true)
//             square.setAttribute('id',i)
//             let random=Math.floor(Math.random()*candy.length)
//             square.style.backgroundColor=candy[random]
//             box.appendChild(square)
//             squarearr.push(square)
//         }
//     }
//     board()

//     // Dragging candies
//     let dragged
//     let replaced
//     let idDragged
//     let idReplaced

//     squarearr.forEach(square => square.addEventListener('dragstart', dragStart))
//     squarearr.forEach(square => square.addEventListener('dragend', dragEnd))
//     squarearr.forEach(square => square.addEventListener('dragover', dragOver))
//     squarearr.forEach(square => square.addEventListener('dragenter', dragEnter))
//     squarearr.forEach(square => square.addEventListener('dragleave', dragLeave))
//     squarearr.forEach(square => square.addEventListener('drop', dragDrop))

//     function dragStart(){
//         dragged=this.style.backgroundColor
//         idDragged=parseInt(this.id)
//         console.log(dragged)
//         console.log(this.id, 'dragstart')
//     }

//     function dragOver(e){
//         e.preventDefault()
//         console.log(this.id, 'dragover')
//     }

//     function dragEnter(e){
//         e.preventDefault()
//         console.log(this.id, 'dragenter')
//     }

//     function dragLeave(){
//         console.log(this.id, 'dragleave')
//     }

//     function dragDrop(){
//         console.log(this.id, 'dragdrop')
//         replaced=this.style.backgroundColor
//         idReplaced=parseInt(this.id)
//         this.style.backgroundColor=dragged
//         squarearr[idDragged].style.backgroundColor=replaced
//     }

//     function dragEnd(){
//         console.log(this.id, 'dragend')
//         //validating move
//         let valid=[
//             idDragged+1,
//             idDragged-1,
//             idDragged+len,
//             idDragged-len
//         ]
//         let validmove=valid.includes(idReplaced)

//         if(idReplaced&&validmove){
//             idReplaced=null
//         }
//         else if(idReplaced&& !validmove){
//             squarearr[idReplaced].style.backgroundColor=replaced
//             squarearr[idDragged].style.backgroundColor=dragged
//         }
//         else{
//             squarearr[idDragged].style.backgroundColor=dragged
//         }
//     }

//     //refilling candies
//     function refill(){
//         for(i=0;i<=55;i++){
//             if(squarearr[i+len].style.backgroundColor === ''){
//                 squarearr[i+len].style.backgroundColor=squarearr[i].style.backgroundColor
//                 squarearr[i].style.backgroundColor = ''
//                 const firstrow=[0,1,2,3,4,5,6,7]
//                 const isfirstrow=firstrow.includes(i)
//                 if(isfirstrow && squarearr[i].style.backgroundColor===''){
//                     let random=Math.floor(Math.random()*candy.length)
//                     squarearr[i].style.backgroundColor = candy[random]
//                 }
//             }
//         }
//     }


//     //checking for matches

//         // Checking for matches of 5

//         function checkrowsforfive(){
//             for(i=0;i<=59;i++){
//                 let row5=[i,i+1,i+2,i+3,i+4]
//                 let checkfor = squarearr[i].style.backgroundColor
//                 const isBlank = squarearr[i].style.backgroundColor === ''
//                 const notvalid=[4,5,6,7,12,13,14,15,20,21,22,23,28,29,30,31,36,37,38,39,44,45,46,47,52,53,54,55]
//                 if(notvalid.includes(i)) continue
    
//                 if(row5.every(index => squarearr[index].style.backgroundColor === checkfor && !isBlank)){
//                     score+=5
//                     scoreDisplay.innerHTML = score
//                     row5.forEach(index => {
//                         squarearr[index].style.backgroundColor = ''
//                     })
//                 }
//             }
//         }
//         checkrowsforfive()
    
    
//         function checkcolumnsforfive(){
//             for(i=0;i<=31;i++){
//                 let column5=[i,i+len,i+len*2,i+len*3,i+len*4]
//                 let checkfor = squarearr[i].style.backgroundColor
//                 const isBlank = squarearr[i].style.backgroundColor === ''
    
//                 if(column5.every(index => squarearr[index].style.backgroundColor === checkfor && !isBlank)){
//                     score+=5
//                     scoreDisplay.innerHTML = score
//                     column5.forEach(index => {
//                         squarearr[index].style.backgroundColor = ''
//                     })
//                 }
//             }
//         }
//         checkcolumnsforfive()

//     // Checking for matches of 4

//     function checkrowsforfour(){
//         for(i=0;i<=60;i++){
//             let row4=[i,i+1,i+2,i+3]
//             let checkfor = squarearr[i].style.backgroundColor
//             const isBlank = squarearr[i].style.backgroundColor === ''
//             const notvalid=[5,6,7,13,14,15,21,22,23,29,30,31,37,38,39,45,46,47,53,54,55]
//             if(notvalid.includes(i)) continue
        
//             if(row4.every(index => squarearr[index].style.backgroundColor === checkfor && !isBlank)){
//                 score+=4
//                 scoreDisplay.innerHTML = score
//                 row4.forEach(index => {
//                     squarearr[index].style.backgroundColor = ''
//                 })
//             }
//         }
//     }
//     checkrowsforfour()
        
        
//     function checkcolumnsforfour(){
//         for(i=0;i<=39;i++){
//             let column4=[i,i+len,i+len*2,i+len*3]
//             let checkfor = squarearr[i].style.backgroundColor
//             const isBlank = squarearr[i].style.backgroundColor === ''
        
//             if(column4.every(index => squarearr[index].style.backgroundColor === checkfor && !isBlank)){
//                 score+=4
//                 scoreDisplay.innerHTML = score
//                 column4.forEach(index => {
//                     squarearr[index].style.backgroundColor = ''
//                 })
//             }
//         }
//     }
//     checkcolumnsforfour()


//     // Checking for matches of 3

//     function checkrowsforthree(){
//         for(i=0;i<=61;i++){
//             let row=[i,i+1,i+2]
//             let checkfor = squarearr[i].style.backgroundColor
//             const isBlank = squarearr[i].style.backgroundColor === ''
//             const notvalid=[6,7,14,15,22,23,30,31,38,39,46,47,54,55]
//             if(notvalid.includes(i)) continue

//             if(row.every(index => squarearr[index].style.backgroundColor === checkfor && !isBlank)){
//                 score+=3
//                 scoreDisplay.innerHTML = score
//                 row.forEach(index => {
//                     squarearr[index].style.backgroundColor = ''
//                 })
//             }
//         }
//     }
//     checkrowsforthree()


//     function checkcolumnsforthree(){
//         for(i=0;i<=47;i++){
//             let column=[i,i+len,i+len*2]
//             let checkfor = squarearr[i].style.backgroundColor
//             const isBlank = squarearr[i].style.backgroundColor === ''

//             if(column.every(index => squarearr[index].style.backgroundColor === checkfor && !isBlank)){
//                 score+=3
//                 scoreDisplay.innerHTML = score
//                 column.forEach(index => {
//                     squarearr[index].style.backgroundColor = ''
//                 })
//             }
//         }
//     }
//     checkcolumnsforthree()


//     window.setInterval(function(){
//         refill()
//         checkrowsforfive()
//         checkcolumnsforfive()
//         checkrowsforfour()
//         checkcolumnsforfour()
//         checkrowsforthree()
//         checkcolumnsforthree()
//     }, 100)




// })
document.addEventListener('DOMContentLoaded', () =>{
    const box = document.querySelector('.box')
    const scoreDisplay = document.getElementById('score')
    const len = 8
    const squarearr = []
    let score = 0
    const candy = [
        'url(images/red-candy.png)',
        'url(images/yellow-candy.png)',
        'url(images/orange-candy.png)',
        'url(images/purple-candy.png)',
        'url(images/green-candy.png)',
        'url(images/blue-candy.png)'
    ]

    // create main gameboard
    function board(){
        for(let i = 0; i < len * len; i++){
            const square = document.createElement('div')
            square.setAttribute('draggable', true)
            square.setAttribute('id', i)
            let random = Math.floor(Math.random() * candy.length)
            square.style.backgroundImage = candy[random]
            box.appendChild(square)
            squarearr.push(square)
        }
    }
    board()

    // Dragging candies
    let dragged
    let replaced
    let idDragged
    let idReplaced

    squarearr.forEach(square => square.addEventListener('dragstart', dragStart))
    squarearr.forEach(square => square.addEventListener('dragend', dragEnd))
    squarearr.forEach(square => square.addEventListener('dragover', dragOver))
    squarearr.forEach(square => square.addEventListener('dragenter', dragEnter))
    squarearr.forEach(square => square.addEventListener('dragleave', dragLeave))
    squarearr.forEach(square => square.addEventListener('drop', dragDrop))

    function dragStart(){
        dragged = this.style.backgroundImage
        idDragged = parseInt(this.id)
        console.log(dragged)
        console.log(this.id, 'dragstart')
    }

    function dragOver(e){
        e.preventDefault()
        console.log(this.id, 'dragover')
    }

    function dragEnter(e){
        e.preventDefault()
        console.log(this.id, 'dragenter')
    }

    function dragLeave(){
        console.log(this.id, 'dragleave')
    }

    function dragDrop(){
        console.log(this.id, 'dragdrop')
        replaced = this.style.backgroundImage
        idReplaced = parseInt(this.id)
        this.style.backgroundImage = dragged
        squarearr[idDragged].style.backgroundImage = replaced
    }

    function dragEnd(){
        console.log(this.id, 'dragend')
        //validating move
        let valid = [
            idDragged + 1,
            idDragged - 1,
            idDragged + len,
            idDragged - len
        ]
        let validmove = valid.includes(idReplaced)

        if(idReplaced && validmove){
            idReplaced = null
        }
        else if(idReplaced && !validmove){
            squarearr[idReplaced].style.backgroundImage = replaced
            squarearr[idDragged].style.backgroundImage = dragged
        }
        else{
            squarearr[idDragged].style.backgroundImage = dragged
        }
    }

    //refilling candies
    function refill(){
        for(let i = 0; i <= 55; i++){
            if(squarearr[i + len].style.backgroundImage === ''){
                squarearr[i + len].style.backgroundImage = squarearr[i].style.backgroundImage
                squarearr[i].style.backgroundImage = ''
                
            }
            const firstrow = [0, 1, 2, 3, 4, 5, 6, 7]
            const isfirstrow = firstrow.includes(i)
            if(isfirstrow && squarearr[i].style.backgroundImage === ''){
                let random = Math.floor(Math.random() * candy.length)
                squarearr[i].style.backgroundImage = candy[random]
            }
        }
    }

    //checking for matches

    // Checking for matches of 5
    function checkrowsforfive(){
        for(let i = 0; i <= 59; i++){
            let row5 = [i, i + 1, i + 2, i + 3, i + 4]
            let checkfor = squarearr[i].style.backgroundImage
            const isBlank = squarearr[i].style.backgroundImage === ''
            const notvalid = [4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31, 36, 37, 38, 39, 44, 45, 46, 47, 52, 53, 54, 55]
            if(notvalid.includes(i)) continue

            if(row5.every(index => squarearr[index].style.backgroundImage === checkfor && !isBlank)){
                score += 5
                scoreDisplay.innerHTML = score
                row5.forEach(index => {
                    squarearr[index].style.backgroundImage = ''
                })
            }
        }
    }
    checkrowsforfive()

    function checkcolumnsforfive(){
        for(let i = 0; i <= 31; i++){
            let column5 = [i, i + len, i + len * 2, i + len * 3, i + len * 4]
            let checkfor = squarearr[i].style.backgroundImage
            const isBlank = squarearr[i].style.backgroundImage === ''

            if(column5.every(index => squarearr[index].style.backgroundImage === checkfor && !isBlank)){
                score += 5
                scoreDisplay.innerHTML = score
                column5.forEach(index => {
                    squarearr[index].style.backgroundImage = ''
                })
            }
        }
    }
    checkcolumnsforfive()

    // Checking for matches of 4
    function checkrowsforfour(){
        for(let i = 0; i <= 60; i++){
            let row4 = [i, i + 1, i + 2, i + 3]
            let checkfor = squarearr[i].style.backgroundImage
            const isBlank = squarearr[i].style.backgroundImage === ''
            const notvalid = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55]
            if(notvalid.includes(i)) continue

            if(row4.every(index => squarearr[index].style.backgroundImage === checkfor && !isBlank)){
                score += 4
                scoreDisplay.innerHTML = score
                row4.forEach(index => {
                    squarearr[index].style.backgroundImage = ''
                })
            }
        }
    }
    checkrowsforfour()

    function checkcolumnsforfour(){
        for(let i = 0; i <= 39; i++){
            let column4 = [i, i + len, i + len * 2, i + len * 3]
            let checkfor = squarearr[i].style.backgroundImage
            const isBlank = squarearr[i].style.backgroundImage === ''

            if(column4.every(index => squarearr[index].style.backgroundImage === checkfor && !isBlank)){
                score += 4
                scoreDisplay.innerHTML = score
                column4.forEach(index => {
                    squarearr[index].style.backgroundImage = ''
                })
            }
        }
    }
    checkcolumnsforfour()

    // Checking for matches of 3
    function checkrowsforthree(){
        for(let i = 0; i <= 61; i++){
            let row = [i, i + 1, i + 2]
            let checkfor = squarearr[i].style.backgroundImage
            const isBlank = squarearr[i].style.backgroundImage === ''
            const notvalid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55]
            if(notvalid.includes(i)) continue

            if(row.every(index => squarearr[index].style.backgroundImage === checkfor && !isBlank)){
                score += 3
                scoreDisplay.innerHTML = score
                row.forEach(index => {
                    squarearr[index].style.backgroundImage = ''
                })
            }
        }
    }
    checkrowsforthree()

    function checkcolumnsforthree(){
        for(let i = 0; i <= 47; i++){
            let column = [i, i + len, i + len * 2]
            let checkfor = squarearr[i].style.backgroundImage
            const isBlank = squarearr[i].style.backgroundImage === ''

            if(column.every(index => squarearr[index].style.backgroundImage === checkfor && !isBlank)){
                score += 3
                scoreDisplay.innerHTML = score
                column.forEach(index => {
                    squarearr[index].style.backgroundImage = ''
                })
            }
        }
    }
    checkcolumnsforthree()

    window.setInterval(function(){
        refill()
        checkrowsforfive()
        checkcolumnsforfive()
        checkrowsforfour()
        checkcolumnsforfour()
        checkrowsforthree()
        checkcolumnsforthree()
    }, 100)
})
