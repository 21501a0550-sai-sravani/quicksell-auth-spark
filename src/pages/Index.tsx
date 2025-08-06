import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/LoadingSpinner';

const Index = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/10 flex items-center justify-center p-4">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            QuickSell
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Your marketplace for everything. Buy and sell with ease.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm shadow-card">
            <div className="text-4xl mb-4">🛍️</div>
            <h3 className="font-semibold text-foreground mb-2">Easy Shopping</h3>
            <p className="text-sm text-muted-foreground">
              Browse thousands of items from trusted sellers
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm shadow-card">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="font-semibold text-foreground mb-2">Quick Selling</h3>
            <p className="text-sm text-muted-foreground">
              List your items and start earning in minutes
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm shadow-card">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="font-semibold text-foreground mb-2">Secure Transactions</h3>
            <p className="text-sm text-muted-foreground">
              Safe and secure platform for all your trades
            </p>
          </div>
        </div>
        
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Button 
            size="lg" 
            onClick={() => navigate('/auth')}
            className="w-full sm:w-auto"
          >
            Get Started
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => navigate('/auth')}
            className="w-full sm:w-auto"
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
