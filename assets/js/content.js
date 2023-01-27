 // classpreload hide
 // preloaded show
 const images={
    picture1:"images/pic01.jpg",
    picture2:"images/pic02.jpg",
    picture3:"images/pic03.jpg",
    picture4:"images/pic04.jpg",
     
 }

 const imgKey=Object.keys(images)
 imgKey.map(x=>{document.querySelector("."+x).src=images[x]})

 const content={
    titlePage:"Skrill Register an Account | New Customers Welcome",
    header_Title:"Hello and welcome to My Skrill Reviews.",
    p1:"the most significant platform user reviews may be found. Visit our page, give the articles ample time to go through, and discover a cold-blooded denial of our results.",
    contin:"Explore",
    whoweare:"Our Character",
    whowearep:"We first became acquainted four months ago when my coworkers and I searched for a payment processor so that we could make certain deposits on specific websites. This prompted us to research the platforms on which we wanted to set up an online account because of the large range of options the website where we wanted to deposit provided. But what we actually needed was for the platform's key features and weaknesses relative to the primary one to be as honestly presented as possible. Typically, platforms showcase their strongest aspects.",
    h21:"Beginning at the beginning",
    h21p:"We have chosen to replicate the user assessments using interviews, surveys, and direct testing of the service ourselves in order to be able to gather everything and offer a complete explanation in the following articles. This is done to spare you the time and effort of being sidetracked by pretentious language and fabricated emotions. I evaluate the various qualities by contrasting them with their primary rivals, leaving the user with the final decision.",
    h21pb:"Think about this Please keep in mind that we are not the provider of the final service for which the analysis process is carried out; we are not employed by them, and our sole objective is to give you a summary of its salient features while also giving you the chance to have all the information you need to be able to make your own judgments about it. However, we must be upfront and say that if you choose to sign up for the service via our website, we could receive a little payment as a result of the referral program included within the links and buttons on our website.",
    includesFeatures:"Skrill features include:",
    includesFeaturesP:"Here, we outline the salient features of the Skrill platform service that we have learned via interviews, our use of it, and comparisons with its leading competitors.",
    h3Title:"Application of the Website Code for Skrill",
    h3Titlep:"Skrill has done a fantastic job in this area, as we have seen, but to be quite honest, a correctly implemented code and site structure might make the difference between a slow and heavy service and a quick and user-friendly one. Despite being at the forefront of technology, Skrill does not set itself apart from other platforms of a similar nature. In fact, we venture to suggest that some of its rivals are technologically more sophisticated than it. Furthermore, we acknowledge that, in contrast to its competitors, Skrill offers a lot more extra goods and capabilities in its service, which encourages a little bit more work than other platforms.",

    btn1:"Sign Up",
    btn2:"Sign Up",
    btn3:"Sign Up",
    btn4:"Sign Up",

    generalQuestions:"General Skrill Security",
    generalQuestionsP:"Since the platform is in charge of safeguarding the assets contained inside, security is a crucial aspect of our total evaluation and must be taken into consideration in a careful study. Here, we want to emphasize that the Skrill platform incorporates a number of security features into the login procedures. This is especially notable in light of the fact that in today's society, merely knowing our account information or having a strong password is no longer adequate. Instead, we must also take into account exterior controls that provide us with the opportunity to lessen the possible activities of outside invaders. In this sense, it is important to emphasize how distinct this platform is from others in the sector because it offers a",
    lastT:"Responsive Design	",
    lastTp:"One factor to really consider is how easily a website can adapt to a device platform, whether it be a tablet, a phone, or a desktop computer. When we refer to a website as responsive, what we truly mean is that it can display properly on all types of devices. This is important for users that use different devices to access and use the website. There isn't much more to say about it as Skrill, like its main competitors, had a fully adjustable website that was the best match for your screen on either a desktop or mobile device, receiving a score of 10 out of 10.",
    lastTitle:"Do you want to open an account now?",

    tiwtters:"https://twitter.com/skrill?af:tramael34",

    facebookF:"https://www.facebook.com/Skrillpayments?afl:ladietiier",

    instagram0:"https://www.instagram.com/skrill/?hl:en&sj:gamenapol",

    showAddr:"57, Rana Pratap Marg, Civil Lines, Lucknow, Uttar Pradesh 226001, IN",

    btnLink:"https://account.skrill.com/wallet/account/sign-up?btag:a_134b_3230c_&program:SKRILL&afiliateCode:aADJGJHKL879906",

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

 