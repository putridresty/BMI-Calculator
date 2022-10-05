function calculate() {
    let Height = document.getElementById('height').value;
    let Weight = document.getElementById('weight').value;
    let bmi = Weight / Math.pow((Height/100),2)

    let calculate_bmi = (bmi.toFixed(1))

    document.getElementById("result").innerHTML="Your BMI is " + calculate_bmi;
 
    let status = document.getElementById("status")
    status.innerHTML = res_status()

    function res_status(){
        if(calculate_bmi<18.5)
        {
            return "Your BMI status is Underweight"
        }
        else if(calculate_bmi>=18.5 && calculate_bmi<24.9)
        {
            return "Your BMI status is Normal"
        }
        else if(calculate_bmi>=25 && calculate_bmi<29.9)
        {
            return "Your BMI status is Overweight"
        }
        else
        {
          return "Your BMI status IS Obesity.. The first wealth is health"
        }
    } 

}

function reset() {
    document.getElementById('weight').value = 0;
    document.getElementById('height').value = 0;
    document.getElementById('result').innerText = "";
    document.getElementById('status').innerText = "";
}