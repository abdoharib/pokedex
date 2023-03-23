export default function getGenderDisturbutionFromGenderRate(genderRate:number):{
    male:number,
    female:number
}{

    const femaleRate = genderRate*0.125*100

    return {
        male: 100-femaleRate,
        female:femaleRate
    }

}