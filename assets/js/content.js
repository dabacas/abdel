 
 const images={
   picture1:"images/pic01.jpg", 
   picture2:"images/pic02.jpg",
   picture3:"images/pic03.jpg",
   picture4:"images/pic04.jpg",
    
}

const imgKey=Object.keys(images)
imgKey.map(x=>{document.querySelector("."+x).src=images[x]})

const content={
   titlePage:"Create a Skrill Account | Welcome New Users",
   header_Title:"Thank you for visiting My Skrill Reviews.",
   p1:"You may find the most important platform user reviews there. Visit our page, read the articles thoroughly, and you'll find a cold-blooded rejection of our findings.",
   contin:"Observe",
   whoweare:"Our Personality",
   whowearep:"My coworkers and I initially met four months ago when we looked for a payment processor so that we could make precise deposits on particular websites. Due to the vast array of alternatives the website where we wanted to deposit offered, this led us to investigate the platforms on which we wanted to set up an online account. The platform's strengths and limitations in relation to the main one, however, needed to be conveyed as honestly as possible. Platforms often highlight their best qualities.",
   h21:"going at the top",
   h21p:"In order to gather all the information and provide a thorough explanation in the following articles, we have decided to recreate the user assessments using interviews, surveys, and direct testing of the service ourselves. We do this to save you the time and effort of being distracted by conceit and manufactured feelings. I assess the various attributes by comparing them to their main competitors, leaving the user to make the final choice ", h21pb: "Consider this Please note that we are not the company providing the final service for which the analysis process is performed; we are not affiliated with them, and our primary goal is to offer you with a summary of its key characteristics while also giving you the opportunity to submit feedback.",
   includesFeatures:"Features of Skrill include:",
   includesFeaturesP:"Here, we list the key characteristics of the Skrill platform service that we have discovered via interviews, personal experience, and comparisons with its top rivals.",
   h3Title:"Application of the Skrill Website Code",
   h3Titlep:"As we've seen, Skrill has done an excellent job in this regard, however, to be quite honest, properly written code and a well-designed website might be the difference between a slow, cumbersome service and a speedy, straightforward one. Despite being at the cutting edge of technology, Skrill does not distinguish itself from other comparable platforms. In fact, we'll even venture to say that some of its competitors are more advanced technologically than it. Additionally, we understand that Skrill gives a lot more extra features and products than its rivals do, which promotes a little bit more work than other platforms.",

   btn1:"Join Now",
   btn2:"Join Now",
   btn3:"Join Now",
   btn4:"Join Now",

   generalQuestions:"Skrill Security in General",
   generalQuestionsP:"Security is an important component of our overall evaluation and must be taken into consideration in a rigorous research because the platform is responsible for protecting the assets stored therein. Here, we want to underline the security elements that the Skrill platform builds into the login processes. This is especially noteworthy in light of the fact that having a strong password or simply knowing our account information is no longer sufficient in today's culture. Instead, we must also consider external controls that provide us the chance to reduce the potential actions of outside intruders. In this sense, it is important to emphasize how distinct this platform is from others in the sector because it offers a",
   lastT:"Responsive Design	",
   lastTp:"The ease with which a website may be adapted to a device platform, whether it be a tablet, a phone, or a desktop computer, is one important consideration. The term "responsive" refers to a website's ability to appear correctly across all sorts of devices. This is crucial for users that access and utilize the website using various devices. There isn't much more to say about it as Skrill had a completely adaptable website that was the ideal fit for your screen on either a desktop or mobile device, earning a score of 10 out of 10.",
   lastTitle:"Want to start an account right away?",

   tiwtters:"https://twitter.com/skrill?af:tuestan",

   facebookF:"https://www.facebook.com/Skrillpayments?afl:fatter",

   instagram0:"https://www.instagram.com/skrill/?hguelpol",

   showAddr:"Kannakatte - Kotturu Rd, behind Tungabadra shikshana samsthe, Jathappa Kenganavara, Kotturu, Karnataka 583134, IN",

   btnLink:"https://account.skrill.com/wallet/account/sign-up?btag:a_13331Pb_3230c_&program:SKRILL&afiliateCode:ASUg823479173",

   copy:"Copyright © 2023 All rights reserved"

}


const keys=Object.keys(content)

keys.map(x=>{
    if(x=="btnLink"){
       document.querySelector(".btn1").href=content.btnLink
       document.querySelector(".btn2").href=content.btnLink
       document.querySelector(".btn3").href=content.btnLink
       document.querySelector(".btn4").href=content.btnLink
    }
    else if(x=="tiwtters" || x=="facebookF" || x=="instagram0"){
       document.querySelector(".tiwtters").href=content.tiwtters
       document.querySelector(".facebookF").href=content.facebookF
       document.querySelector(".instagram0").href=content.instagram0
    }
    else
    document.querySelector("."+x).innerText=content[x]

})

document.querySelector(".favicon").href="images/favicon.png"

