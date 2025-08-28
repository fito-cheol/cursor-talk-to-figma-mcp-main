import React, { useState } from 'react';
import './SignupForm.scss';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    savingsAmount: '',
    savingsCycle: '매월',
    autoTransferDate: '',
    manager: '',
    certificateMethod: '',
    postalAddress: '',
    incentive: '신청'
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleRadioChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePrevious = () => {
    console.log('이전 버튼 클릭');
  };

  const handleNext = () => {
    console.log('다음 버튼 클릭', formData);
  };

  const isFormValid = () => {
    return formData.savingsAmount && formData.autoTransferDate && formData.manager;
  };

  return (
    <div className="signup-form">
      {/* Status Bar */}
      <div className="status-bar">
        <div className="time">9:41</div>
        <div className="status-icons">
          <div className="cellular"></div>
          <div className="wifi"></div>
          <div className="battery"></div>
        </div>
      </div>

      {/* Top Navigation */}
      <div className="top-nav">
        <div className="nav-title">노란우산 가입</div>
        <div className="nav-icons">
          <div className="nav-icon chat"></div>
          <div className="nav-icon close"></div>
        </div>
      </div>

      <div className="content">
        {/* Progress Section */}
        <div className="progress-section">
          <div className="progress-bar">
            <div className="progress-step"></div>
            <div className="progress-step"></div>
            <div className="progress-step active">
              <span>3 가입정보</span>
            </div>
          </div>
          <div className="title-section">
            <h1 className="main-title">
              저축 상세 정보를<br />입력해 주세요
            </h1>
          </div>
        </div>

        {/* Form Sections */}
        <div className="form-section">
          {/* 가입 정보 Section */}
          <div className="section-header">
            <h2 className="section-title">가입 정보</h2>
          </div>

          <div className="spacing-16"></div>

          {/* 저축금액(월) */}
          <div className="input-group">
            <div className="input-label">저축금액(월)</div>
            <input
              type="text"
              className="input-field"
              placeholder="50,000원~ 1,000,000원"
              value={formData.savingsAmount}
              onChange={(e) => handleInputChange('savingsAmount', e.target.value)}
            />
            <div className="input-hint">
              <div className="hint-dot"></div>
              <span>최소 월 5만원부터 최대 100만원 이하로 입력해주세요.</span>
            </div>
          </div>

          {/* 저축 주기 */}
          <div className="input-group">
            <div className="input-label">저축 주기</div>
            <div className="radio-group">
              <div
                className={`radio-option ${formData.savingsCycle === '매월' ? 'selected' : ''}`}
                onClick={() => handleRadioChange('savingsCycle', '매월')}
              >
                매월
              </div>
              <div
                className={`radio-option ${formData.savingsCycle === '3개월에 한번' ? 'selected' : ''}`}
                onClick={() => handleRadioChange('savingsCycle', '3개월에 한번')}
              >
                3개월에 한번
              </div>
            </div>
          </div>

          {/* 자동이체일 */}
          <div className="input-group">
            <div className="input-label">자동이체일</div>
            <div className="dropdown">
              <div
                className="dropdown-field"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>{formData.autoTransferDate || '선택해 주세요'}</span>
                <div className={`dropdown-arrow ${dropdownOpen ? 'open' : ''}`}></div>
              </div>
              {dropdownOpen && (
                <div className="dropdown-options">
                  {['1일', '5일', '10일', '15일', '20일', '25일', '말일'].map((date) => (
                    <div
                      key={date}
                      className="dropdown-option"
                      onClick={() => {
                        handleInputChange('autoTransferDate', date);
                        setDropdownOpen(false);
                      }}
                    >
                      {date}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="divider"></div>

        {/* 관리 직원 Section */}
        <div className="form-section">
          <div className="section-header">
            <h2 className="section-title">관리 직원</h2>
            <div className="select-indicator">
              <div className="divider-line"></div>
              <span>선택</span>
            </div>
          </div>

          <div className="spacing-16"></div>

          <div className="input-group">
            <div className="input-field search">
              <span>검색해 주세요</span>
              <div className="search-icon"></div>
            </div>
          </div>

          <div className="spacing-40"></div>

          {/* 가입증서 수령 방법 */}
          <div className="input-group">
            <h3 className="section-title">가입증서 수령 방법</h3>
            <div className="radio-group">
              {['알림톡', '이메일', '우편'].map((method) => (
                <div
                  key={method}
                  className={`radio-option ${formData.certificateMethod === method ? 'selected' : ''}`}
                  onClick={() => handleRadioChange('certificateMethod', method)}
                >
                  {method}
                </div>
              ))}
            </div>
          </div>

          <div className="spacing-40"></div>

          {/* 우편 받으실 곳 */}
          <div className="input-group">
            <h3 className="section-title">우편 받으실 곳</h3>
            <div className="radio-group">
              {['자택', '사업장'].map((address) => (
                <div
                  key={address}
                  className={`radio-option ${formData.postalAddress === address ? 'selected' : ''}`}
                  onClick={() => handleRadioChange('postalAddress', address)}
                >
                  {address}
                </div>
              ))}
            </div>
          </div>

          <div className="spacing-64"></div>

          {/* 희망 장려금 */}
          <div className="input-group">
            <div className="section-header">
              <h3 className="section-title">희망 장려금</h3>
              <div className="info-icon">
                <div className="info-dot"></div>
                <div className="info-line"></div>
              </div>
            </div>
            <div className="radio-group">
              {['신청', '미신청'].map((option) => (
                <div
                  key={option}
                  className={`radio-option ${formData.incentive === option ? 'selected' : ''}`}
                  onClick={() => handleRadioChange('incentive', option)}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="bottom-buttons">
        <button className="btn btn-secondary" onClick={handlePrevious}>
          이전
        </button>
        <button 
          className={`btn btn-primary ${isFormValid() ? 'active' : ''}`}
          onClick={handleNext}
          disabled={!isFormValid()}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default SignupForm;
