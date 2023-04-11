class Job {
    constructor( jobName, industry, requiresDegree, field, collarType) {
    this.jobName = jobName;
    this.industry = industry;
    this.requiresDegree = requiresDegree;
    this.field = field;
    this.collarType = collarType;
    }

    getName() {
        return `This job title is ${this.jobName}.`;
    }

    getIndustryAndField() {
        return `This job is in the ${this.industry} industry, which is in the field of ${this.field}.`
    }
}
    class commissionJob extends Job {
        constructor( jobName, industry, requiresDegree, field, collarType, payType, investmentsRequired){
        super(jobName, industry, requiresDegree, field, collarType)
        this.payType = payType;
        this.investmentsRequired = investmentsRequired;
        }
        getPayType(){
            return `This job pays out in a ${this.payType} pay type.`
        }
        getInvestmentsRequired(){
            if (this.investmentsRequired === true) {
                return `This job does require one or multiple investments before working.`
            } else {
            return `This job does not require an investment before working.`
            }
        }
        
    }

console.log("-------------------------------------------------------------------------------")
const pharmacist = new Job("Pharmacist", "Pharmaceuticals", true, "medicine", "White-collar")
console.log(pharmacist.getName())
console.log(pharmacist.getIndustryAndField())

console.log("-------------------------------------------------------------------------------")

const cashier = new Job("Cashier", "Retail", false, "Customer-Service", "Blue-collar")
console.log(cashier.getName())
console.log(cashier.getIndustryAndField())

console.log("-------------------------------------------------------------------------------")

const mechanic = new commissionJob ("Mechanic", "Automotive", "Technical degree required.", "technician",
 "Blue-collar", "commissioned", true)
console.log(mechanic.getName())
console.log(mechanic.getIndustryAndField())
console.log(mechanic.getPayType())
console.log(mechanic.getInvestmentsRequired())

console.log("-------------------------------------------------------------------------------")
