import { prop, getModelForClass } from '@typegoose/typegoose';

class Department {
  @prop({ required: true })
  name: string
}

export default getModelForClass(Department)
