self.addEventListener("message", ev=>self.postMessage(`Got a message "${ev.data}" from Host: so reply "World!"`) )
