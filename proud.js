// Don't laugh. I copied this from a repo I worked on years ago because it was the first enhancement I independently discovered and implemented in production. Short and simple, but very meaningful to me.
return path.slice(-1) === "/" ? path + file : `${path}/${file}`;
