import { prop, getModelForClass } from '@typegoose/typegoose';

class Candidate {
  @prop({ required: true })
  public name: string

  @prop({ required: true })
  public age: number

  @prop({ required: true })
  public exp: number

  @prop()
  public desiredSalary: Number

  @prop()
  public status: String

  @prop()
  public desiredProfession: String

  @prop()
  public desiredProfessionEng: String
}

export default getModelForClass(Candidate)