import * as React from 'react';
import {Box, Typography} from "@mui/material";
import AceEditor from "react-ace";
// import '/static/common/ace-builds/src-noconflict/ace.js';
import '../../../../static/common/ace-builds/src-noconflict/ext-language_tools';
import '../../../../static/common/ace-builds/src-noconflict/mode-python';
import '../../../../static/common/ace-builds/src-noconflict/theme-dracula';
import '../../../../static/common/ace-builds/src-noconflict/snippets/python';

function AceEditorRobot() {
    const [fontSize, setFontSize] = React.useState(14);
    const editorele = React.useRef(null);
    // var editorele;
    React.useEffect(() => {
          console.log(editorele.current.props.fontSize);
    }, [editorele]);

    const codeChange = () => {
        console.log("Changed!");
    }
    const setFontSize_ = (augm) => {
        const ftSize = editorele.current?.props.fontSize;
        if (augm) {
            if (ftSize < 70) setFontSize(ftSize+1);
        } else {
            if (ftSize > 2) setFontSize(ftSize-1);
        }
    }

    return (
          <Box sx={{m:3,p:2, display:"inline-flex",flexDirection:"column",border: "2px solid #d3d3d3"}} id="code-control">
              <Typography align={'center'} variant={"h5"} sx={{fontFamily: 'Raleway'}}>
                  Editor
              </Typography>
              <Box id="code_container">
                  <div id={"editor"}>
                   <AceEditor
                mode="python"
                theme="dracula"
                name="code"
                onChange={codeChange}
                ref={editorele}
                fontSize={fontSize}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                defaultValue={`from GUI import GUI
from HAL import HAL
# Enter sequential code!

while True:
    # Enter iterative code!`}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    showLineNumbers: true,
                    tabSize: 2,
                }}/>

</div><input type="button" id="aug_font" onClick={ ()=> setFontSize_(true)} defaultValue={"+"} />
                <input type="button" id="red_font" onClick={() => setFontSize_(false)} defaultValue={"-"} />
              </Box>
          </Box>
      );

}

export default AceEditorRobot;