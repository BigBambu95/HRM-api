import { prop, getModelForClass } from '@typegoose/typegoose';

class Profession {
  @prop({ required: true })
  name: string
}

export default getModelForClass(Profession)
