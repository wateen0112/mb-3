import { useI18n } from "vue-i18n";

export const useDateTime = ()=>{
  const {t}= useI18n()
  function showDayName(dateString: string): string {
    const months = [
     t('monthes.jan'),
     t('monthes.feb'),
     t('monthes.mar'),
     t('monthes.apr'),
     t('monthes.may'),
     t('monthes.jun'),
     t('monthes.jul'),
     t('monthes.aug'),
     t('monthes.sep'),
     t('monthes.oct'),
     t('monthes.nov'),
     t('monthes.dec')
    ];
  
    const date = new Date(dateString);
    const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][date.getDay()];
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
  
    return `${dayOfWeek} ${dayOfMonth} ${month}`;
  }
  const reformatDate = (dateString:string)=>{

    // Parse the date string into a Date object
    var dateObj = new Date(dateString);
    
    // Get the day, month, and year
    var day = dateObj.getDate();
    var month = dateObj.getMonth() ; // Add 1 because getMonth() returns 0-based index
    var year = dateObj.getFullYear();
    
    // Combine the day, month, and year into a new date string in dd-mm-yyyy format
    var newDateString = day + "-" + month + "-" + year;
    return newDateString
    
    }
    const getDate = (date:string)=>{
      return date.split('T')[0]
    }

function getClock(dateString: string): string {
  const date = new Date(dateString);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  const time = hours + ':' + minutes + ' ' + ampm;
  return time;
}
const toValidDate = (dateString :string)=>{
  const [day, month, year] = (dateString).split('-');

  const date = new Date(year , month , day);
  
  return(date); 
}

  return {showDayName,reformatDate,getClock,toValidDate}
}
