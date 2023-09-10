import Card from '@/components/Card';
import { Header } from '@/components/Form';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import config from 'config';
import StackList from '@/components/list/StackList';
import React from 'react';

export default function Projects() {
  return (
    <>
      <PageSEO
        title={`Projects - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className='fade-in divide-y-2 divide-gray-100 dark:divide-gray-800'>
        <Header title='Projects' />
        <div className='container py-12'>
          <div className='-m-4 flex flex-wrap'>
            {config.projects.map(
              ({ slug, title, description, banner, stack }) => (
                <Card
                  key={slug}
                  title={title}
                  description={description}
                  banner={banner}
                  href={`/projects/${slug}`}
                  stack={stack}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </>
  );
}
