import React, { useState, useEffect } from 'react';
import '../styles/UserInfo.css'; // We will create this file next

interface UserInfoData {
  ip: string;
  country: string;
  countryCode: string;
  regionName: string;
  city: string;
  isp: string;
  org: string;
  as: string;
  lat?: number; // Latitude
  lon?: number; // Longitude
  query?: string; // query is the IP address if the API call was for a specific IP
}

const UserInfo: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfoData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      setIsLoading(true);
      try {
        // Using a CORS proxy for ip-api.com if direct calls are blocked by browser
        // For a production app, you'd ideally have your own backend proxy or use a service that allows CORS.
        // Alternatively, some free services like geojs.io provide CORS headers.
        // Let's try geojs.io first as it's simpler and often allows direct frontend calls.
        // const response = await fetch('https://get.geojs.io/v1/ip/geo.json');
        // If geojs.io fails or for more details, ip-api.com is good but might need a proxy.
        // For this example, let's assume ip-api.com works directly or via a commonly available public proxy if needed.
        // A common public CORS proxy is allorigins.win, but its reliability can vary.
        // const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('http://ip-api.com/json')}`);

        // Let's try a service known for good CORS support: ipify's geo API (requires signup for full features, but basic IP is free)
        // Or, more simply, ip-api.com often works for demos.
        const response = await fetch('http://ip-api.com/json');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // if (response.headers.get("content-type")?.includes("application/json")) {
        //   const data = JSON.parse(rawData.contents); // If using allorigins
        //   setUserInfo(data);
        // } else {
        //   throw new Error('Received non-JSON response from proxy');
        // }
        setUserInfo(data);

      } catch (err) {
        if (err instanceof Error) {
          setError(`Failed to fetch user info: ${err.message}`);
        } else {
          setError('Failed to fetch user info: An unknown error occurred.');
        }
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  if (isLoading) {
    return <div className="user-info-container loading">Fetching user data...</div>;
  }

  if (error) {
    return <div className="user-info-container error">Error: {error}</div>;
  }

  if (!userInfo) {
    return <div className="user-info-container">No user information available.</div>;
  }

  return (
    <section className="user-info-section">
      <div className="container">
        <div className="section-header">
          <h2>Visitor Information</h2>
          <div className="underline"></div>
        </div>
        <div className="user-info-container">
          <p><strong>IP Address:</strong> {userInfo.query || userInfo.ip}</p>
          <p><strong>Location:</strong> {userInfo.city}, {userInfo.regionName}, {userInfo.country} ({userInfo.countryCode})</p>
          {userInfo.lat !== undefined && userInfo.lon !== undefined && (
            <p><strong>Coordinates:</strong> Latitude: {userInfo.lat.toFixed(4)}, Longitude: {userInfo.lon.toFixed(4)}</p>
          )}
          <p><strong>ISP:</strong> {userInfo.isp}</p>
          {userInfo.org && <p><strong>Organization:</strong> {userInfo.org}</p>}
          {/* <p>AS: {userInfo.as}</p> */}
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
