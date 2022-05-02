import React from 'react'

function FFA() {
    return (
        <div className="ffa">
            <h1 className="ffa-title">Fully Funded Academy</h1>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sunt explicabo quos odio quis aliquid molestiae in aliquam officia suscipit rerum harum soluta alias, deleniti incidunt, blanditiis cumque ipsam beatae.

                {/* Possible Starting Paragraph:
                Fundraising is hard. Getting people (almost all of them are strangers to some point) to give you their hard earned money so you might have a chance to tell other people (most defiantly all are strangers) about Jesus.  

                Well, we are hear to help. Below are some guidelines that have been proven to work. Interested? Tale a look! 
                */}
            </p>
            <ol className="RoadMap" id="FREEDOM">

                <li className="RoadMap" id="F">Focus Your Vision</li>

                <ol className="steps">
                    <li>Have a written mission statement.</li>
                    <li>Have a written vision statement.</li>
                    <li>Have a written timeline.</li>
                    <li>Have a written budget.</li>
                </ol>

                <li className="RoadMap" id="R">Starting Your Market Research</li>
                <ol className="steps">
                    <li>Read about 1 - 3 missionaries that have successfully been to the field that you are looking to go to.</li>
                    <li>Try to analyse and see what were their successes, how did they measure success, how did they accomplish them, what were their pitfalls, and how they overcame those pitfalls.</li>
                    <li>Have a one on one conversation with at least 3 missionaries about their experiences while they were in the field.</li>
                    <li>Compare your notes from step 1 with the things that you have read and the conversations that you have had and make changes where needed.</li>
                </ol>

                <li className="RoadMap" id="E">Enlist Your Team</li>
                <ol className="steps">
                    <li>Find yourself a person that believes in your mission to help you with your journey. This person should be organized and able to take the lead when needed.</li>
                    <li>Prepare an elevator speech  and a 1 page document prepared to hand out briefly describing your mission.</li>
                    <li>Try and find a few more members, 3 or 4, that believe in you and your mission to join your team to help you with your mission.(These members, along with the other member that you found earlier, will be your greatest strength when it comes preparing for the mission in the future steps)</li>
                </ol>

                <li className="RoadMap" id="E">Create Your Brand</li>
                <ol className="steps">
                    <li>Find color themes and creat a logo that fits around your mission.</li>
                    <li>Create a website where people can read updates and possibly give towards your mission.</li>
                    <li>Have an email and/or newsletter sent out at least every month to keep others informed about your mission.</li>
                </ol>

                <li className="RoadMap" id="D">Marketing and Advertising</li>
                <ol className="steps">
                    <li>Create a fictional bio of what you think would be the perfect donor for you.</li>

                    <li>Start sending out your team to talk to others about your mission, introducing you to other potential donors, and opening up doors that might be closed otherwise.</li>
                </ol>

                <li className="RoadMap" id="O">A Few Things That You Might Want To Note</li>
                <ol className="steps">
                    <li>Be prepared with a customized message (not your elevator speech) when presenting your mission.</li>
                    <li>Make sure that you prepare your message to the right audience.</li>
                    <li>Know the exact dollar amount that you need and in what area of the budget that it is when presenting.</li>
                    <li>Celebrate both the small and large victories with your team and donors.</li>
                </ol>
            </ol>


            <button src="https://go.fullyfundedacademy.com/roadmap">Want To Learn More?</button>
        </div>
    )
}

export default FFA
