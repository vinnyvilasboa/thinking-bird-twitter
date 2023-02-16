const React = require('react')

class Index extends React.Component {
    render(){
        // const quotesDB = this.props.quotes
        const myQuote = this.props.myQuote
        console.log(myQuote)
        // will give a random number to be used as index
        // const randomizer = () => {
        //     // loop is length of the array only if number was already used
        //     for(let i of quotesDB){
        //         let num = Math.floor(Math.random() * quotesDB.length)
        //         if(!numArr.includes(num)){
        //             // no repeating quote in a week
        //             if(numArr.length >= 7) numArr.shift()
        //             numArr.push(num)
        //             return num
        //         }
        //     }
        // }
        // const randomQuote = () => {
        //     // let idx = randomizer()
        //     // console.log(numArr)
        //     let myQuote = quotesDB[Math.floor(Math.random() * quotesDB.length)]
        //     console.log(myQuote)
        //     return myQuote
        //     // return quotesDB[idx]
        // }   
        return(
            <div>
                <h1>Thinking Quotes</h1>
                <a href="/myQuote">Get Quote</a>
                <p>{myQuote.quote}</p>
                <small>{myQuote.author}</small>
            </div>
        )
    }
}

module.exports = Index