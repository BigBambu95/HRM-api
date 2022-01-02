import { prop, getModelForClass } from '@typegoose/typegoose';

class Office {
  @prop({ required: true })
  name: string
}

export default getModelForClass(Office)
