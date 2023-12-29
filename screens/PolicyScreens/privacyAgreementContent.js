   //this is just some test data to simulate getting something from the api, replace it with an actual call
    const _response = new Object();
    //for now, it will just take paragraphs and put them in the same
    //if we need different types of headers, i can add that logic
    _response.data = [
        "This Privacy Policy describes how Resilience, Inc collects, uses, and discloses personal information when you use our Unite mobile application. By accessing or using the App, you agree to the terms of this Privacy Policy."+
        
        "\n\nInformation We Collect"+
        "\n1.1 Personal Information: When you use the App, we may collect personal information that can be used to identify you, such as your name, email address, phone number, and any other information you provide voluntarily."+
        "\n1.2 Usage Data: We may also collect certain information about how you use the App, including your IP address, device type, operating system, and app usage statistics. This information is collected in a manner that does not personally identify you."+
        
        "\n\nHow We Use Your Information"+
        "\n2.1 Providing and Improving the App: We use the information we collect to provide you with the App's features and functionalities and to improve the overall user experience. This includes analyzing user behavior, conducting research and analysis, and optimizing the App's performance."+
        "\n2.2 Communication: We may use your personal information to send you important updates, notifications, and promotional materials related to the App. You can opt-out of receiving promotional communications at any time by following the instructions provided in the communication...."
    ];
    _response.effectivedate = "Effective as of 18 May 2023";
    var jsonString = JSON.stringify(_response);
    //this is just some test data to simulate getting something from the api, replace it with an actual call   
    //once we get the data from the backend, we'll parse
    let response_obj = JSON.parse(jsonString);
    export let _r_text = response_obj.data;
    export const effectivedate = response_obj.effectivedate;