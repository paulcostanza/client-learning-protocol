import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import IDE from '../../../components/IDE'

export default function Tables() {
  const quizImports = {
    html: () => import('../../../pages/quiz/database/HTMLQuestions.js')
  }

  const quickfactsTable = `<table id="quickfacts">
  <thead>
    <tr>
      <th colspan="2">Quick Facts: Software Developers, Quality Assurance Analysts, and Testers</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2023 Median Pay</th>
      <td>
        $130,160 per year
        <br>$62.58 per hour
      </td>
    </tr>
    <tr>
      <th>Typical Entry-Level Education</th>
      <td>Bachelor's degree</td>
    </tr>
    <tr>
      <th>Work Experience in a Related Occupation</th>
      <td>None</td>
    </tr>
    <tr>
      <th>On-the-job Training</th>
      <td>None</td>
    </tr>
    <tr>
      <th>Number of Jobs, 2022</th>
      <td>1,795,300</td>
    </tr>
    <tr>
      <th>Job Outlook, 2022-32</th>
      <td>25% (Much faster than average)</td>
    </tr>
    <tr>
      <th>Employment Change, 2022-32</th>
      <td>451,200</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>If this table had a footer it would be here.</th>
    </tr>
  </tfoot>
</table>`

  const simpleTable = `<table>
  <thead>
    <tr>
      <th colspan="3">The title of this table</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>First Row</th>
      <td>
        First Data Cell
      </td>
      <td>
        Second First DC
      </td>
    </tr>
    <tr>
      <th>Second Row</th>
      <td>
        Second Data Cell
      </td>
      <td>
        Second Second DC
      </td>
    </tr>
    <tr>
      <th>Third Row</th>
      <td>
        Third Data Cell
      </td>
      <td>
        Second Third DC
      </td>
    </tr>
    <tr>
      <th>Fourth Row</th>
      <td>
        Fourth Data Cell
      </td>
      <td>
        Second Fourth DC
      </td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th colspan="3">The footer of this table, which might contain date of publication, author credits, or other meta information.</th>
    </tr>
  </tfoot>
</table>`

  const tableBorderOutline = `body {background: #2d2d2d; color: #ccc;}
a { color: #357abd; }
img { width: 300px; }
footer { font-size: 0.88em; }

table, th, td {
    border: 1px solid #fff;
}
`

  const tableCaption = `<table>
  <caption>Football Scores</caption>
</table>`

  const calculusGrades = `<table>
      <caption>
        Calculus Final Exam Grades
      </caption>

      <thead>     
        <tr>
          <th>Last Name</th>
          <th>First Name</th>
          <th>Grade</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Davis</td>
          <td>Alex</td>
          <td>54</td>
        </tr>

        <tr>
          <td>Doe</td>
          <td>Samantha</td>
          <td>92</td>
        </tr>

        <tr>
          <td>Rodriguez</td>
          <td>Marcus</td>
          <td>88</td>
        </tr>

        <tr>
          <td>Thompson</td>
          <td>Jane</td>
          <td>77</td>
        </tr>

        <tr>
          <td>Williams</td>
          <td>Natalie</td>
          <td>83</td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td colspan="2">Average Grade</td>
          <td>78.8</td>
        </tr>
      </tfoot>
    </table>`

  const tableBorderWithPaddingAndMargin = `body {background: #2d2d2d; color: #ccc;}
a { color: #357abd; }
img { width: 300px; }
footer { font-size: 0.88em; }

table, th, td {
    border: 1px solid #fff;
}

th, td {
    padding: 10px;
}

table { margin: auto;}
`

  return (
    <div className="container">
      <h1>Tables</h1>

      <p><em>HTML tables are excellent for display data in a well-organized manner.</em></p>

      <IDE
        HTMLStart={quickfactsTable}
      />

      <p>As you can see, there is a main <code>table</code> element with an <code>id</code> set to <code>quickfacts</code>. Inside it, the table has a table head element, <code>thead</code>, table body element, <code>tbody</code>, and a table foot element, <code>tfoot</code>.</p>

      <p>The table head, body, and foot elements can each contain any number of table rows, <code>tr</code>. And each table row can contain a table header <code>th</code>, table data <code>td</code>, or both.</p>

      <ul>
        <li><code>th</code> labels the data in that row.</li>
        <li><code>td</code> contains the individual data points, aka data cells</li>
      </ul>

      <p>This may seem like a lot all at once, but every table follows a similar architectural hierarchy like we see above. The next example is simple table, and as you can see, the same ordering is applied.</p>

      <IDE
        HTMLStart={simpleTable}
        CSSStart={tableBorderOutline}
      />

      <blockquote>We added some CSS, specifically to the border of certain elements, to show you the space they take up.</blockquote>

      <p>Some websites will choose to use <code>div</code>s to build their own tables instead of using the more appropriate <code>table</code> element (stay away from them, they are a nightmare!).</p>

      <blockquote>If the table you are display does not need headers along the left-most column, then do not include <code>th</code> within the <code>tr</code> of the <code>tbody</code>. So simple!</blockquote>

      <p>You can add a caption to a <code>table</code> by using a <strong>table caption</strong> element (<code>caption</code>).</p>

      <div className="">
        <SyntaxHighlighter language="html" style={tomorrow}
          wrapLines={true} className=" code-snippet">
          {tableCaption}
        </SyntaxHighlighter>
      </div>

      <p>The <code>colspan</code> attribute specifies the number of columns a cell should span. You may have noticed it in previous examples from above.</p>

      <IDE
        HTMLStart={calculusGrades}
        CSSStart={tableBorderWithPaddingAndMargin}
      />

      <hr />

      <h2>Review</h2>

      <ReviewQuiz
        quizImports={quizImports}
        subcategory="tables"
      />
    </div>
  )
}