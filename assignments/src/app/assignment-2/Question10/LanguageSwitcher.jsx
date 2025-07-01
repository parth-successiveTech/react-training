'use client'
import React,{useContext} from 'react';
import { LanguageContext } from '@/app/Context/LanguageContext';
const LanguageSwitcher=()=>
{
    const{language,changeLanguage}=useContext(LanguageContext);
    return(
        <div>
            <button onClick={()=>changeLanguage('en')}disabled={language==='en'}>
                English
            </button>
            <button onClick={()=>changeLanguage('es') }disabled={language==='es'}>
            Espanol
            </button>
        </div>
    );
}
export default LanguageSwitcher;