import { prop, getModelForClass } from '@typegoose/typegoose';

class Document {
  @prop({ required: true })
  name: string

  @prop({ required: true, default: new Date() })
  date: Date

  @prop({ required: true })
  file: {
    id: string,
    name: string,
    ext: string,
    size: number
  }
} 

export default getModelForClass(Document)