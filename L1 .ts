interface person {
    firstName: string ;
    lastName?: string;
    birthday?: Date; 
};

interface Contact {
    phoneNumber: string;
    email?: string;
    slack?: string;

    formatNumber(phoneNumber){
        console.log((480)-555-5515)
    };
};

interface ContactCard extends person Contact {
    sendmessage()
    addToFavorites()

    let Sam = <ContactCard>{};
Sam.firstName = Sam;
Sam.lastName= Sprite;
Sam.birthday= 6, 12, 1978;
Sam.phoneNumber= 480-555-5515;



console.log(ContactCard);
}
