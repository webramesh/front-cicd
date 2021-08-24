import BaseModel from './BaseModel'

export default class CategoryModel extends BaseModel {
  get schema () {
    return {
      id: undefined,
      sub_cat: undefined,
      cat_name: undefined,
      sub_cat_name: undefined,

      createdAt: undefined,
      updatedAt: undefined
    }
  }

  prepareCreate () {
    this.baseClear()

    return this 
  }

  prepareUpdate () {
    this.baseClear()

    return this
  }
}
