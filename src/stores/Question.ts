import { QUESTIONS_API } from "@/api/Quesitons";
import { AddPharmacyQuestionRequestDto } from "@/api/Quesitons/QuestionsDto";
import { useApi } from "@/composables";

const {GET , POST} = useApi();
export const QuestionStore  = defineStore('question',()=>{

const pharmacyQuestionRequestDto = ref<AddPharmacyQuestionRequestDto>()
const add_pharmacy_question= async()=>{
    try {
      const res =await POST(QUESTIONS_API.add_pharmacy_question,pharmacyQuestionRequestDto.value)  
    } catch (error) {
     throw(error)   
    }
}
const  pharmacy_questions = async()=>{
    try {
        const res = await GET(QUESTIONS_API.pharmacy_questions);

    } catch (error) {
        throw(error)
    }
}
return {
    pharmacyQuestionRequestDto,
    add_pharmacy_question,
    pharmacy_questions
}
})