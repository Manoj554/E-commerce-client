import React from 'react'

const ThreeDotAnimation = () => {
  return (
    <div>
      <style jsx>{`
                .dot-flashing {
                    position: relative;
                    width: 10px;
                    height: 10px;
                    border-radius: 5px;
                    background-color: #9880ff;
                    // margin-left: 50px;
                    color: #9880ff;
                    animation: dotFlashing 1s infinite linear alternate;
                    animation-delay: .5s;
                  }
                  
                  .dot-flashing::before, .dot-flashing::after {
                    content: '';
                    display: inline-block;
                    position: absolute;
                    top: 0;
                  }
                  
                  .dot-flashing::before {
                    left: -15px;
                    width: 10px;
                    height: 10px;
                    border-radius: 5px;
                    background-color: #9880ff;
                    color: #9880ff;
                    animation: dotFlashing 1s infinite alternate;
                    animation-delay: 0s;
                  }
                  
                  .dot-flashing::after {
                    left: 15px;
                    width: 10px;
                    height: 10px;
                    border-radius: 5px;
                    background-color: #9880ff;
                    color: #9880ff;
                    animation: dotFlashing 1s infinite alternate;
                    animation-delay: 1s;
                  }
                  
                  @keyframes dotFlashing {
                    0% {
                      background-color: #9880ff;
                    }
                    50%,
                    100% {
                      background-color: #ebe6ff;
                    }
                  }
            `}</style>

      <div className="dot-flashing"></div>
    </div>
  )
}

export default ThreeDotAnimation;