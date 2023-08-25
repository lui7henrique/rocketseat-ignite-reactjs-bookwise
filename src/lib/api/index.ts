import {
  Book as PrismaBook,
  Category,
  Rating as PrismaRating,
  User,
} from '@prisma/client'
import axios from 'axios'

const url = axios.create({
  baseURL: '/api',
})

export type Book = {
  ratingsAverage: number
  ratingsCount: number
  ratings: PrismaRating[]
  categories: Category[]
} & PrismaBook

type Books = Array<Book>

export type Rating = {
  user: User
} & PrismaRating

type Ratings = Array<Rating>

export const api = {
  getCategories: async () => {
    const { data } = await url.get<{ categories: Category[] }>('/categories')

    return data
  },
  getBooks: async (categories: string[]) => {
    const params = categories.length
      ? {
          categories: categories.join(','),
        }
      : undefined

    const { data } = await url.get<Books>('/books', {
      params,
    })

    return data
  },
  getBookRatings: async (bookId: string) => {
    const { data } = await url.get<Ratings>(`/ratings/${bookId}`)
    return data
  },
}