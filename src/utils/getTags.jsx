
export function getTags(data) {
    const tags = {};
    data.forEach((article) => {
      article.taxonomy.tags.forEach((tag) => {
        if (!tags[tag.slug]) {
          tags[tag.slug] = {
            slug: tag.slug,
            text: tag.text,
            count: 1,
          };
        } else {
          tags[tag.slug].count += 1;
        }
      });
    });
    return Object.values(tags).sort((a, b) => b.count - a.count).slice(0, 10);
  }
  