import React from "react";

const Greetings = ({lang, children})=>{
      let greetingText = '';

      switch (lang) {
        case 'de':
          greetingText = 'Hallo';
          break;
        case 'en':
          greetingText = 'Hello';
          break;
        case 'es':
          greetingText = 'Hola';
          break;
        case 'fr':
          greetingText = 'Bonjour';
          break;
        default:
          greetingText = 'Hello';
          break;
      }

      return (
        <div className="greeting">
          {greetingText}, {children}!
        </div>
      );

}









export default Greetings;