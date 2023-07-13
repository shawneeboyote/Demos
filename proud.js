} else if (skipPartition){
return path.slice(-1) === "/" ? path : `${path}/`; // if user did't provide trailing slash, add one.
}
