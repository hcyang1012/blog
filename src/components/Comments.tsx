'use client'

import Giscus from '@giscus/react'

interface CommentsProps {
  repo: `${string}/${string}`
  repoId: string
  category: string
  categoryId: string
}

export default function Comments({ repo, repoId, category, categoryId }: CommentsProps) {
  return (
    <div className="mt-8">
      <Giscus
        repo={repo}
        repoId={repoId}
        category={category}
        categoryId={categoryId}
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="preferred_color_scheme"
        lang="en"
        loading="lazy"
      />
    </div>
  )
}