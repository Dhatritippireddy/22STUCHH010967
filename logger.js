import axios from 'axios';

const logs = [];

const logUrl = 'http://20.244.56.144/evaluation-service/logs';

const aT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ0aXBwaXJlZGR5ZGhhdHJpMjJAaWZoZW5kaWEub3JnIiwiZXhwIjoxNzUzMjU0MjAxLCJpYXQiOjE3NTMyNTMzMDEsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJmMmE2YjExNC03ZDMzLTQ2ZGItOGI1Yi1hMzIzMzNmODJmZTUiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJ0aXBwaXJlZGR5IGRoYXRyaSIsInN1YiI6IjA3Nzk2MGI4LTY3NTAtNDI4Ny1iNmNjLTFjNWNiMTlkMDRmMSJ9LCJlbWFpbCI6InRpcHBpcmVkZHlkaGF0cmkyMkBpZmhlbmRpYS5vcmciLCJuYW1lIjoidGlwcGlyZWRkeSBkaGF0cmkiLCJyb2xsTm8iOiIyMnN0dWNoaDAxMDk2NyIsImFjY2Vzc0NvZGUiOiJiQ3VDRlQiLCJjbGllbnRJRCI6IjA3Nzk2MGI4LTY3NTAtNDI4Ny1iNmNjLTFjNWNiMTlkMDRmMSIsImNsaWVudFNlY3JldCI6InR0RnhLUlZmS015dktHZk4ifQ.fPV4JwzB-Ax4yrLGRe8IXh6hey2Q-31bYXOw4ybvDac';

const sendLog = async (stack, level, pkg, message) => {
  try {
    await axios.post(
      logUrl,
      { stack, level, package: pkg, message },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${aT}`,
        }
      }
    );
  } catch (e) {
    console.error('Failed to send log:', e);
  }
};

const errLog = (error, ctx = '') => {
  const msg = (error.message || error.toString()) + (ctx ? ` | ctx: ${ctx}` : '');
  const entry = { msg, ctx, time: new Date().toISOString() };
  logs.push(entry);
  console.error('Error logged:', entry);
  sendLog('frontend', 'error', 'api', msg);
};

export { errLog };
