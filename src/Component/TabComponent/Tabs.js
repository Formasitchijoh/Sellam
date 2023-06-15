import React from 'react'

const Tabs = () => {
  return (
    <div class='Tabs'>
        <ul class="nav">
            <li>Tab 1</li>
            <li>Tab 2</li>

        </ul>
        <div class='outlet'>
            {/* content will be shown here */}
        </div>
    </div>
  )
}

export default Tabs