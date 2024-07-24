import { OnChangeJSON } from '@remirror/react'
import { WysiwygEditor } from '@remirror/react-editors/wysiwyg'
import { useState } from 'react'

export default function App() {
  const [json, setJson] = useState<unknown>(null)

  return (
    <>
      <div style={{ padding: 16 }}>
        <WysiwygEditor placeholder="Enter text...">
          <OnChangeJSON onChange={setJson} />
        </WysiwygEditor>
        <h1>JSON</h1>
        <pre>{JSON.stringify(json, null, 2)}</pre>
      </div>
    </>
  )
}
