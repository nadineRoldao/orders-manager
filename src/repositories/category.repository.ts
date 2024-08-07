import { DatasourceConfig } from '../config/datasource.config'
import { Category } from '../models/category'
import queries from '../../files/categories-queries.json'

export interface CategoryRepository {

    getAll(): Promise<Category[]>
    getById(id: number): Promise<Category>

}