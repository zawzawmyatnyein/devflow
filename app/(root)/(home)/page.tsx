import QuestionCard from '@/components/cards/QuestionCard';
import HomeFilters from '@/components/home/HomeFilters';
import Filter from '@/components/shared/Filter';
import NoResult from '@/components/shared/NoResult';
import LocalSearchbar from '@/components/shared/search/LocalSearchbar';
import { Button } from '@/components/ui/button';
import { HomePageFilters } from '@/constants/filters';
import Link from 'next/link';

const questions = [
  {
    _id: '1',
    title: 'How to use TypeScript with React?',
    tags: [
      { _id: 'tag1', name: 'TypeScript' },
      { _id: 'tag2', name: 'React' },
    ],
    author: {
      _id: 'author1',
      name: 'John Doe',
      picture: 'john_doe.jpg',
    },
    upvotes: 15442,
    views: 1312341241,
    answers: [],
    createdAt: new Date('2021-05-25T12:00:00Z'),
  },
  {
    _id: '2',
    title: 'What are some best practices for database design?',
    tags: [
      { _id: 'tag3', name: 'Database' },
      { _id: 'tag4', name: 'Design' },
    ],
    author: {
      _id: 'author2',
      name: 'Jane Smith',
      picture: 'jane_smith.jpg',
    },
    upvotes: 8,
    views: 120,
    answers: [],
    createdAt: new Date('2023-10-24T09:30:00Z'),
  },
  {
    _id: '3',
    title: 'How to optimize performance in a React application?',
    tags: [
      { _id: 'tag2', name: 'React' },
      { _id: 'tag5', name: 'Performance' },
    ],
    author: {
      _id: 'author1',
      name: 'John Doe',
      picture: 'john_doe.jpg',
    },
    upvotes: 12,
    views: 90,
    answers: [],
    createdAt: new Date('2023-10-23T15:45:00Z'),
  },
  {
    _id: '4',
    title: 'What are the benefits of using a NoSQL database?',
    tags: [
      { _id: 'tag3', name: 'Database' },
      { _id: 'tag6', name: 'NoSQL' },
    ],
    author: {
      _id: 'author3',
      name: 'Robert Johnson',
      picture: 'robert_johnson.jpg',
    },
    upvotes: 15,
    views: 150,
    answers: [],
    createdAt: new Date('2023-10-22T11:20:00Z'),
  },
  {
    _id: '5',
    title: 'How to deploy a Node.js application on AWS?',
    tags: [
      { _id: 'tag7', name: 'Node.js' },
      { _id: 'tag8', name: 'AWS' },
    ],
    author: {
      _id: 'author4',
      name: 'Sarah Williams',
      picture: 'sarah_williams.jpg',
    },
    upvotes: 20,
    views: 200,
    answers: [],
    createdAt: new Date('2023-10-21T14:10:00Z'),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
          discussion. our query could be the next big thing others learn from. Get
          involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
