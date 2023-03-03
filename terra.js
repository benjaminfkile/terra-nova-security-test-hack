answerTo = (qNum) => {
    const visibleCards = document.getElementsByClassName("quiz-card__main")
    let desiredCard
    let answer = ""
    if (visibleCards.length > 0) {
        
        for (let i = 0; i < visibleCards.length; i++) {
            const card = visibleCards[i]
            let qMatch = `${card.getElementsByClassName("visually-hidden")[0].innerHTML}`.split(" ")[1]
            if (`${qNum}` === qMatch) {
                desiredCard = card
            }
        }

        const feedbackWrapper = desiredCard.getElementsByClassName("quiz-card__feedback")[0]
        const feedbackList = feedbackWrapper.getElementsByClassName("fr-view")[0]
        const feedBackItems = feedbackList.getElementsByTagName("p")

        for (let i = 0; i < feedBackItems.length; i++) {
            const feedbackItem = feedBackItems[i].innerHTML
            if (feedbackItem[0] !== "<") {
                answer += feedbackItem + "\n\n"
            }
        }

        alert(answer.length > 0 ? answer : "not found :(")

    } else {
        setTimeout((qNum) => {//wait for the quiz to start
            answerTo(qNum)
        }, 500)
    }
}